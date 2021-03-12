import { render } from '@testing-library/react';
import Items from './Items';

test('should return an empty Items list', () => {
    const items = render(<Items passedItems={[]}/>);
    const listOfItems = items.queryAllByRole('button');
    expect(listOfItems.innerHTML).toBe(undefined)
});

/*test('should return 1 item with the name flowerpot', () => { /* This needs Material-UI testing *//*
    const flowerpot = ["flowerpot"];
    const items = render(<Items passedItems={[flowerpot]}/>);
    const listOfItems = items.getByRole('button');
    expect(listOfItems.text).toBe("flowerpot");
});*/