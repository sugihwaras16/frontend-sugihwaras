"use client";

import { useState, useEffect } from 'react';
import { Combobox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/16/solid';
import { Select } from '@headlessui/react';
import { getAllCategory } from './getCategory';

type Category = {
  id: string;
  title: string;
};

const ComboBox = ({
  onChange
}: {
  onChange?: (data: Category | undefined) => void
}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await getAllCategory();
      setCategories(result);
      setSelectedCategory(result[0] || null);
    };

    fetchCategories();
  }, []);

  const filteredCategories =
    query === ''
      ? categories
      : categories.filter((category) =>
          category.title.toLowerCase().includes(query.toLowerCase())
        );

  if (!categories.length) {
    return <div className="skeleton h-5 w-72"></div>;
  }

  const onHandleChange = (data: Category) => {
    setSelectedCategory(data)
    if(onChange){
      onChange(data)
    }
  }

  return (
    <div className="w-72">
      <Combobox value={selectedCategory} onChange={onHandleChange}>
        <div className="relative mt-1">
          <Combobox.Input
            className="w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(category: Category) => category.title}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <Select className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </Combobox.Button>
          <Combobox.Options className="absolute z-40 mt-1 w-full bg-white shadow-lg max-h-40 rounded-md py-4 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
            {filteredCategories.map((category) => (
              <Combobox.Option
                key={category.id}
                value={category}
                className={({ active }) =>
                  `cursor-default select-none overflow-y-auto relative py-2 pl-10 pr-4 ${
                    active ? 'text-white bg-indigo-600' : 'text-gray-900'
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
                      {category.title}
                    </span>
                    {selected ? (
                      <span
                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                          active ? 'text-white' : 'text-indigo-600'
                        }`}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </div>
      </Combobox>
    </div>
  );
};

export default ComboBox;
