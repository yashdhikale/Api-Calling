const mockData = {
    item1: 'value1',
    item2: 'value2'
  };
  
  export const fetchData = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: mockData });
      }, 500);
    });
  };
  
  export const addItem = async (newItem) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        mockData[newItem.name] = newItem.value;
        resolve({ data: mockData });
      }, 500);
    });
  };
  
  export const updateItem = async (item, value) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        mockData[item] = value;
        resolve({ data: mockData });
      }, 500);
    });
  };
  
  export const deleteItem = async (item) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        delete mockData[item];
        resolve({ data: mockData });
      }, 500);
    });
  };
  