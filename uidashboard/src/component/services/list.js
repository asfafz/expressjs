
export function getemployeedetail(item) {
    return fetch('http://apps.masoodtextile.com/AprLabelIdApitest/api/LABELID/LabelIdEmpInfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ item })
    })
      .then(data => data.json())
   }