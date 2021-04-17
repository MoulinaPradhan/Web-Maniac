const products = [
    {
      _id:1,
      name: 'Equinox T-Shirt',
      image: 'data:image/jpeg;base64,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',
      description:
        'Cooton comfortable wear for students',
      brand: 'Polo',
      category: 'Clothes',
      price: 150,
      countInStock: 3,
      rating: 4.5,
      numReviews: 4,
    },
    {
      _id:2,
      name: 'Hot water bottle',
      image: 'https://image.made-in-china.com/2f0j00YnpEhGFgOkqr/Double-Wall-Stainless-Steel-Thermos-Vacuum-Flask-for-Hot-Water.jpg',
      description:
        'keeps water hot for longer time',
      brand: 'milton',
      category: 'bottle',
      price: 599.99,
      countInStock: 10,
      rating: 4.0,
      numReviews: 4,
    },
    {
      _id:3,
      name: 'Cannon EOS Camera',
      image: 'https://images-na.ssl-images-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg',
      description:
        'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
      brand: 'Cannon',
      category: 'Electronics',
      price: 9529.99,
      countInStock: 5,
      rating: 3,
      numReviews: 3,
    },
    
    {
      _id:4,
      name: 'Logitech Keyboard',
      image: 'https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,h_843,q_auto,w_1500/c_pad,h_843,w_1500/F7950933-01?pgw=1&pgwact=1',
      description:
        'Get a better handle on your games with this Logitech.',
      brand: 'Logitech',
      category: 'Electronics',
      price: 8549.99,
      countInStock: 7,
      rating: 3.5,
      numReviews: 2,
    },
    {
      _id:5,
      name: 'Amazon Echo Dot 3rd Generation',
      image: 'https://www.reliancedigital.in/medias/Amazon-B07P9B3W1G-Computer-Speakers-491600506-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxODgzNHxpbWFnZS9qcGVnfGltYWdlcy9oYzMvaDgxLzkyMTY2NjQxNzQ2MjIuanBnfDQxNjE4MmM1ZDBjY2E5N2JhODk5MzAzNDE1MTQxY2E1NDU1ODUxOWQxNGQxNjAyN2NmYmZiZmEwYTMwNDAxM2M',
      description:
        'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
      brand: 'Amazon',
      category: 'Electronics',
      price: 20529.99,
      countInStock: 0,
      rating: 4,
      numReviews: 4,
    },
  ]
  
  export default products