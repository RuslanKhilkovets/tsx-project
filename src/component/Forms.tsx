import React, { FC, FormEvent, useState } from "react";

type FormsProps = {};

export const Forms: FC<FormsProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [validEmail, setValidEmail] = useState<boolean>(true);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailPattern = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;
    const isValid = emailPattern.test(email);
    setValidEmail(isValid);
    if (!isValid) {
      // Виведіть повідомлення про помилку або виконайте інші дії в разі невалідного email.
    }
  };

  return (
    <form action="/" onSubmit={(e) => onSubmitHandler(e)} >
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ borderColor: validEmail ? 'initial' : 'red' }}
      />
      {!validEmail && <p style={{ color: 'red' }}>Некоректна електронна пошта</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Forms;