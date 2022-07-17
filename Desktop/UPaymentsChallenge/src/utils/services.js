import axios from 'axios';

const baseURL = 'https://62286b649fd6174ca82321f1.mockapi.io/case-study/';

export async function getcategories() {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/categories/`, config)
      .then(val => {
        resolve(val);
      })
      .catch(err => {
        console.log({...err});
        reject(err);
      });
  });
}

export async function getproductbyid(id) {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/products/${id}`, config)
      .then(val => {
        resolve(val);
      })
      .catch(err => {
        console.log({...err});
        reject(err);
      });
  });
}

export async function getproducts() {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}/products`, config)
      .then(val => {
        resolve(val);
      })
      .catch(err => {
        console.log({...err});
        reject(err);
      });
  });
}

export async function addproducts(name, price, category, description, avatar) {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const formData = new FormData();
  formData.append('Name', name);
  formData.append('Price', price);
  formData.append('Category', category);
  formData.append('Description', description);
  formData.append('Avatar', avatar);
  formData.append('DeveloperEmail', 'bfk1690@gmail.com');

  let body = {
    name: name,
    price: price,
    category: category,
    description: description,
    avatar: avatar,
    developerEmail: 'bfk1690@gmail.com',
  };

  //   avatar: "avatar 128"
  // createdAt: 1658008585
  // developerEmail: "developerEmail 128"
  // id: "128"
  // name: "name 128"
  // price: 35

  return new Promise((resolve, reject) => {
    axios
      .post(`${baseURL}/products`, body, config)
      .then(val => {
        resolve(val);
      })
      .catch(err => {
        console.log({...err});
        reject(err);
      });
  });
}
