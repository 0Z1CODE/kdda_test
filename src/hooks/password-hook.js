import { useState, useEffect } from 'react';
export const usePasswordValidation = ({
  firstPassword = '',
  secondPassword = '',
}) => {
  const [validLength, setValidLength] = useState(null);
  const [hasNumber, setHasNumber] = useState(null);
  const [upperCase, setUpperCase] = useState(null);
  const [lowerCase, setLowerCase] = useState(null);
  const [specialChar, setSpecialChar] = useState(null);
  const [hasSpace, setSpace] = useState(null);
  const [match, setMatch] = useState(null);
  const [letters, setLetters] = useState(null);
  useEffect(() => {
    setValidLength(firstPassword.length >= 8);
    setUpperCase(firstPassword.toLowerCase() !== firstPassword);
    setLowerCase(firstPassword.toUpperCase() !== firstPassword);
    setHasNumber(/\d/.test(firstPassword));
    setSpace(/[\s]/.test(firstPassword));
    setLetters(/^[A-Za-z]+$/.test(firstPassword));
    setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(firstPassword));
    setMatch(secondPassword === firstPassword);
  }, [firstPassword, secondPassword]);
  return [
    validLength,
    hasNumber,
    upperCase,
    lowerCase,
    specialChar,
    match,
    hasSpace,
    letters,
  ];
};
