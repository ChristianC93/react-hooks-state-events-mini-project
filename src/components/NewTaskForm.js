import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function onTextChange(e) {
    setText(e.target.value);
  }

  function onCategoryChange(e) {
    setCategory(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({text, category});
    setText("")
    setCategory("Code")
  }


  const categoryOptions = categories.map((category) => {
    if (category !== "All") {
      return (<option key={category}>{category}</option>)
    };
  });


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={onTextChange}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={onCategoryChange}>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
