import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({ component: App });
import DefaultLayout from '../layouts/default/Default';

function App() {
  return <DefaultLayout>Hello World</DefaultLayout>;
}
