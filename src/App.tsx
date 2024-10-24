import React, { useState } from 'react';
import { Button } from "/components/ui/button";
import { Input } from "/components/ui/input";
import { Textarea } from "/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "/components/ui/select";

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [image, setImage] = useState(null);

  const handleCalculate = (operation) => {
    switch (operation) {
      case 'add':
        setResult(num1 + num2);
        break;
      case 'subtract':
        setResult(num1 - num2);
        break;
      case 'multiply':
        setResult(num1 * num2);
        break;
      case 'divide':
        setResult(num1 / num2);
        break;
      default:
        break;
    }
  };

  const handleAddComment = () => {
    setComments([...comments, { text: newComment, image }]);
    setNewComment('');
    setImage(null);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-6 lg:p-8 bg-white rounded shadow-md">
      <nav className="flex justify-center mb-4">
        <Button onClick={() => setActivePage('home')} className="mx-2">Home</Button>
        <Button onClick={() => setActivePage('kitchen')} className="mx-2">Kitchen</Button>
        <Button onClick={() => setActivePage('bedroom')} className="mx-2">Bedroom</Button>
        <Button onClick={() => setActivePage('bathroom')} className="mx-2">Bathroom</Button>
        <Button onClick={() => setActivePage('balcony')} className="mx-2">Balcony</Button>
        <Button onClick={() => setActivePage('wardrobe')} className="mx-2">Wardrobe</Button>
      </nav>
      {activePage === 'home' && (
        <div>
          <h1 className="text-3xl font-bold mb-4">Home</h1>
          <div className="flex flex-wrap justify-center mb-4">
            <Input type="number" value={num1} onChange={(event) => setNum1(Number(event.target.value))} className="w-full md:w-1/2 p-2 mb-2 md:mb-0" />
            <Input type="number" value={num2} onChange={(event) => setNum2(Number(event.target.value))} className="w-full md:w-1/2 p-2 mb-2 md:mb-0" />
          </div>
          <div className="flex justify-center mb-4">
            <Button onClick={() => handleCalculate('add')} className="mx-2">+</Button>
            <Button onClick={() => handleCalculate('subtract')} className="mx-2">-</Button>
            <Button onClick={() => handleCalculate('multiply')} className="mx-2">*</Button>
            <Button onClick={() => handleCalculate('divide')} className="mx-2">/</Button>
          </div>
          <p className="text-2xl font-bold mb-4">Result: {result}</p>
        </div>
      )}
      {activePage === 'kitchen' && (
        <div>
          <h1 className="text-3xl font-bold mb-4">Kitchen</h1>
          <Card>
            <CardHeader>
              <CardTitle>Kitchen</CardTitle>
              <CardDescription>This is the kitchen</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is the kitchen content</p>
            </CardContent>
            <CardFooter>
              <p>This is the kitchen footer</p>
            </CardFooter>
          </Card>
        </div>
      )}
      {activePage === 'bedroom' && (
        <div>
          <h1 className="text-3xl font-bold mb-4">Bedroom</h1>
          <Card>
            <CardHeader>
              <CardTitle>Bedroom</CardTitle>
              <CardDescription>This is the bedroom</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is the bedroom content</p>
            </CardContent>
            <CardFooter>
              <p>This is the bedroom footer</p>
            </CardFooter>
          </Card>
        </div>
      )}
      {activePage === 'bathroom' && (
        <div>
          <h1 className="text-3xl font-bold mb-4">Bathroom</h1>
          <Card>
            <CardHeader>
              <CardTitle>Bathroom</CardTitle>
              <CardDescription>This is the bathroom</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is the bathroom content</p>
            </CardContent>
            <CardFooter>
              <p>This is the bathroom footer</p>
            </CardFooter>
          </Card>
        </div>
      )}
      {activePage === 'balcony' && (
        <div>
          <h1 className="text-3xl font-bold mb-4">Balcony</h1>
          <Card>
            <CardHeader>
              <CardTitle>Balcony</CardTitle>
              <CardDescription>This is the balcony</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is the balcony content</p>
            </CardContent>
            <CardFooter>
              <p>This is the balcony footer</p>
            </CardFooter>
          </Card>
        </div>
      )}
      {activePage === 'wardrobe' && (
        <div>
          <h1 className="text-3xl font-bold mb-4">Wardrobe</h1>
          <img src="https://i.imgur.com/Mu8K37D.jpg" alt="Wardrobe" />
        </div>
      )}
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <div className="flex flex-wrap justify-center mb-4">
        <Textarea value={newComment} onChange={(event) => setNewComment(event.target.value)} className="w-full md:w-1/2 p-2 mb-2 md:mb-0" />
        <input type="file" onChange={handleImageChange} className="w-full md:w-1/2 p-2 mb-2 md:mb-0" />
      </div>
      <Button onClick={handleAddComment} className="mx-2">Add Comment</Button>
      <div className="flex flex-wrap justify-center mb-4">
        {comments.map((comment, index) => (
          <div key={index} className="w-full md:w-1/2 p-2 mb-2 md:mb-0">
            <Avatar>
              <AvatarImage src={comment.image ? URL.createObjectURL(comment.image) : 'https://github.com/nutlope.png'} />
              <AvatarFallback>?</AvatarFallback>
            </Avatar>
            <p className="text-lg">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;