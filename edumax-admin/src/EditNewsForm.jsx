import React from 'react';
import './custom.css';

function EditNewsForm() {
  return (
    <div className="container mt-4 bg-white p-4 rounded shadow custom-form-container">
      <h2 className="mb-4 text-2xl font-bold text-gray-800 custom-form-title">Edit News Item</h2>
      <form action="https://students.open.ac.uk/mct/tm252/reflect/reflect.php" method="POST">
        <input type="hidden" name="itemID" value="10002000-3000-123456abcdef" />
        <div className="form-group mb-3">
          <label htmlFor="newsTitle" className="block font-medium">Title</label>
          <input type="text" className="form-control" id="newsTitle" name="newsTitle" defaultValue="Sample News Title" required />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="newsContent" className="block font-medium">Content</label>
          <textarea className="form-control" id="newsContent" name="newsContent" rows="5" required>
            Sample news content goes here.
          </textarea>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="newsDate" className="block font-medium">Date</label>
          <input type="date" className="form-control" id="newsDate" name="newsDate" defaultValue="2023-10-01" required />
        </div>
        <button type="submit" className="btn btn-primary custom-btn">Update News Item</button>
      </form>
    </div>
  );
}

export default EditNewsForm;
