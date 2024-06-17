"use client"

import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react';
import { useState } from 'react';

type Person = {
  id: number;
  name: string;
};

const people: Person[] = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
];

const ComboboxComponents = () => {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(people[0]);
  const [query, setQuery] = useState('');

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="w-full max-w-xs mx-auto">
      <Combobox value={selectedPerson} onChange={setSelectedPerson} onClose={() => setQuery('')}>
        <div className="relative">
          <ComboboxInput
            aria-label="Assignee"
            displayValue={(person: Person) => person?.name ?? ''}
            onChange={(event) => setQuery(event.target.value)}
            className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ComboboxOptions className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
            {filteredPeople.length === 0 && (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nothing found.
              </div>
            )}
            {filteredPeople.map((person) => (
              <ComboboxOption
                key={person.id}
                value={person}
                className={({ active }) =>
                  `cursor-pointer select-none relative py-2 pl-10 pr-4 ${
                    active ? 'text-white bg-blue-600' : 'text-gray-900'
                  }`
                }
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {person.name}
                    </span>
                    {selected ? (
                      <span
                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                          active ? 'text-white' : 'text-blue-600'
                        }`}
                      >
                        ✔
                      </span>
                    ) : null}
                  </>
                )}
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </div>
      </Combobox>
    </div>
  );
}

export default ComboboxComponents;
