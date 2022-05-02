import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Popover, Text, Button, Group } from '@mantine/core';

const code = `
import { Popover, Text, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <Popover width={200} position="bottom" withArrow shadow="md">
        <Popover.Target>
          <Button>Toggle popover</Button>
        </Popover.Target>
        <Popover.Dropdown>
          <Text size="sm">This is uncontrolled popover, it is opened when button is clicked</Text>
        </Popover.Dropdown>
      </Popover>
    </Group>
  );
}
`;

function Demo() {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <Group position="center">
      <Popover width={200} position="bottom" withArrow shadow="md" opened={opened}>
        <Popover.Target>
          <Button onMouseEnter={open} onMouseLeave={close}>
            Toggle popover
          </Button>
        </Popover.Target>
        <Popover.Dropdown sx={{ pointerEvents: 'none' }}>
          <Text size="sm">This is uncontrolled popover, it is opened when button is clicked</Text>
        </Popover.Dropdown>
      </Popover>
    </Group>
  );
}

export const hover: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
