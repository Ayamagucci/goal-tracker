import { useRef, type FormEvent } from 'react';

interface AdderProps {
  handleAdd: (title: string, description: string) => void;
}

export default function Adder(
  { handleAdd }: AdderProps
) {
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const titleInput = titleRef.current?.value || '';
    const descInput = descRef.current?.value || '';

    if (titleInput && descInput) {
      handleAdd(titleInput, descInput);
      e.currentTarget.reset(); // NOTE: <HTMLFormElement> req above **
    }
  };

  return (
    <form onSubmit={ handleSubmit }>
      <label>New Goal:</label>
      <input ref={ titleRef } name='title' />

      <label>Description:</label>
      <input ref={ descRef } name='description' />

      <button>ADD</button>
    </form>
  );
}