import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlagIcon } from 'react-flag-kit';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-grey-900);
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s; 
`;

const DropdownList = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  width: 10rem;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  z-index: 10;
  width: 100%;
  padding:0.5rem;
`;

const DropdownItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem 1rem;
  font-size: 1.4rem;
  color: var(--color-grey-900);
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  gap:1rem;
  width:100%;

  &:hover {
    background-color: var(--color-grey-50);
    color: var(--bs-text-primary);
    border-radius: var(--border-radius-sm);
  }
`;

const LanguageDropdown = () => {
    const { i18n } = useTranslation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        setIsDropdownOpen(false); // Close the dropdown after selecting a language
    };

    return (
        <DropdownContainer>
            <DropdownButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <FlagIcon code={i18n.language.toUpperCase() === 'EN' ? 'US' : i18n.language.toUpperCase()} />
                {i18n.language === 'en' ? 'English' : i18n.language === 'fr' ? 'French' : 'German'}
                <svg
                    className={`${isDropdownOpen ? 'transform rotate-180' : ''} ml-1 h-4 w-4 text-gray-500`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path fillRule="evenodd" d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-.707.293z" clipRule="evenodd" />
                </svg>
            </DropdownButton>
            {isDropdownOpen && (
                <DropdownList>
                    <DropdownItem onClick={() => changeLanguage('en')}>
                        <FlagIcon code="US" /> English
                    </DropdownItem>
                    <DropdownItem onClick={() => changeLanguage('fr')}>
                        <FlagIcon code="FR" /> French
                    </DropdownItem>
                    <DropdownItem onClick={() => changeLanguage('de')}>
                        <FlagIcon code="DE" /> German
                    </DropdownItem>
                    <DropdownItem onClick={() => changeLanguage('ar')}>
                        <FlagIcon code="AR" /> Arabic
                    </DropdownItem>
                </DropdownList>
            )}
        </DropdownContainer>
    );
};

export default LanguageDropdown;

