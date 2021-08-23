import React from 'react';
import { InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';
import { StyledButton } from '../../StyledButton';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';

import { useDispatch } from 'react-redux';
import { setSearch as setSearchRedux, clearSearch as clearSearchRedux } from '../../../../store/modules/admin/shared/search/reducer';
import { useRouter } from 'next/router';


interface SearchAndIcon {
  icon: IconProp,
  newPath: string
}

export const SearchAndIcon: React.FC<SearchAndIcon> = ({ newPath, icon }) => {

  const [search, setSearch] = React.useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  React.useEffect(() => {
    dispatch(clearSearchRedux());
  }, [])

  const handleSearch = (): void => {
    router.replace(router.pathname, '?page=1');
    dispatch(setSearchRedux(search))
  }

  return (
    <Row>
      <Col lg={9} xs>
        <Row>
          <Col lg={9} xs={10}>
            <InputGroup>
              <FormControl
                placeholder="Pesquisar"
                className={styles.input}
                value={search}
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                  setSearch(evt.target.value)
                }}
                onKeyPress={
                  (evt: React.KeyboardEvent<HTMLInputElement>) => {
                    if (evt.key.toLocaleLowerCase() === 'enter') {
                      handleSearch();
                    }
                  }
                }
              />
            </InputGroup>
          </Col>

          <Col lg={3} xs={2} className={styles.search_icon} style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon icon={faSearch}
              size="lg"
              color="var(--color-gray-light)"
              className="float-start"
              onClick={handleSearch}
            />
          </Col>
        </Row>
      </Col>

      <Col lg={2} xs={{ span: 3 }} className={styles.titleButton}>
        <Link href={newPath}>
          <a>
            <StyledButton icon={icon} type_button='blue' />
          </a>
        </Link>
      </Col>
    </Row>
  )
}
