import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextInput from './TextInput';

test('TextInput Component Test', async () => {
  const user = userEvent.setup();
  render(<TextInput />);
  const textElement = screen.getByText('Enterd Text:');
  expect(textElement).toBeInTheDocument();
  const inputElement = screen.getByLabelText('Text Input');
  await user.type(inputElement, 'Hello World');
  expect(screen.getByText('Enterd Text: Hello World')).toBeInTheDocument();
});
