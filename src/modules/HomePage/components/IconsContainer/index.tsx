import * as icons from '@lib';
import { useState, SVGProps, ChangeEvent } from 'react';
import styles from './IconsContainer.module.css';
import { Input } from '@/components';
import { Icon } from '../Icon';
import { useTimedState } from '@/hooks';

type IconsType = {
  [key: string]: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

const filters: { label: string; value: string | null }[] = [
  { label: 'All', value: null },
  { label: 'Filled', value: 'filled' },
  { label: 'Outlined', value: 'outlined' },
  { label: 'Two tone', value: 'twoTone' },
];

export const IconsContainer = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [filter, setFilter] = useState<string | null>(null);
  const [isTooltip, setIsTooltip] = useTimedState(1);

  const filteredIcons = Object.keys(icons).filter(iconName => {
    const loweredCaseName = iconName.toLowerCase();

    const loweredCaseQuery = searchQuery.toLowerCase();

    const isMatchedWithQuery = loweredCaseName.includes(loweredCaseQuery);

    let isMatchedFilter = false;

    if (filter && filter !== 'filled') {
      isMatchedFilter = loweredCaseName.endsWith(filter);
    } else if (filter && filter === 'filled') {
      isMatchedFilter =
        !loweredCaseName.endsWith('outlined') &&
        !loweredCaseName.endsWith('twoTone');
    } else {
      isMatchedFilter = true;
    }

    return isMatchedFilter && isMatchedWithQuery;
  });

  const SelectedIcon = selectedIcon ? (icons as IconsType)[selectedIcon] : null;

  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'flex-start',
        padding: '8px',
      }}
    >
      <div className={styles.container}>
        <Input
          placeholder="Search icons"
          value={searchQuery}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchQuery(e.target.value)
          }
        />

        <div
          style={{
            display: 'flex',
            gap: '1rem',
            marginTop: '1rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.2rem',
              justifyContent: 'flex-start',
            }}
          >
            {filters.map(({ label, value }) => (
              <div
                key={label}
                style={{
                  border: '1px solid #000',
                  borderRadius: '5px',
                  padding: '5px 8px',
                  fontSize: '12px',
                  cursor: 'pointer',
                  fontWeight: 300,
                  transition: 'all 0.2s ease-in',
                  ...(filter === value && {
                    background: '#000',
                    color: '#fff',
                  }),
                }}
                onClick={() => setFilter(value)}
              >
                {label}
              </div>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            {filteredIcons.map(name => {
              const Component = (icons as IconsType)[name];
              return (
                <Component
                  key={name}
                  onClick={() => setSelectedIcon(name)}
                  style={{ cursor: 'pointer' }}
                />
              );
            })}
          </div>
        </div>
      </div>
      {selectedIcon && (
        <div
          style={{
            minWidth: '450px',

            //   opacity: selectedIcon ? 1 : 0,
            //   overflow: 'none',
            //   transition: 'all 0.3s ease-in-out',
            background: 'rgba(246, 247, 248, 0.5)',
            border: '1px solid rgb(232, 234, 238)',

            //   padding: '1rem',
            borderRadius: '8px',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                padding: '0.5rem 1rem',
                fontWeight: 400,
              }}
            >
              {selectedIcon}
            </div>
          </div>
          <div
            style={{
              background: '#000',
              color: '#fff',
              fontSize: '14px',
              // overflow: 'auto',
              padding: '1rem',
              fontFamily: 'monochrome',
              fontWeight: 400,
              cursor: 'pointer',
              position: 'relative',
            }}
            onClick={() => {
              navigator.clipboard.writeText(
                `import { ${selectedIcon} } from "@lib"`
              );
              setIsTooltip(true);
            }}
          >
            <span style={{ color: '#66d9ef' }}>import </span>
            <>{`{ ${selectedIcon} }`}</>
            <span style={{ color: '#66d9ef' }}> from </span>
            <span style={{ color: '#a6e22e' }}>"@lib"</span>
            {isTooltip && (
              <div
                style={{
                  position: 'absolute',
                  top: -18,
                  right: 5,
                  color: '#000',
                  fontSize: '12px',
                }}
              >
                Copied
              </div>
            )}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              // marginTop: '1rem',
              padding: '20px 0',
            }}
          >
            <Icon
              Component={SelectedIcon}
              style={{
                width: '72px',
                height: '72px',
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
