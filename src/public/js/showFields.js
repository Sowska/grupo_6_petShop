function showFields() {
    var category = document.querySelector('input[name="categoryValue"]:checked').value;
    switch (category) {
      case '1':
        document.getElementById('color').style.display = 'grid';
        document.getElementById('material').style.display = 'block';
        document.getElementById('fragrance').style.display = 'none';
        document.getElementById('flavor').style.display = 'none';
        document.getElementById('size').style.display = 'none';
        document.getElementById('measure').style.display = 'none';
        break;
      case '2':
        document.getElementById('measure').style.display = 'block';
        document.getElementById('flavor').style.display = 'block';
        document.getElementById('color').style.display = 'none';
        document.getElementById('material').style.display = 'none';
        document.getElementById('size').style.display = 'none';
        document.getElementById('fragrance').style.display = 'none';
        break;
      case '3':
        document.getElementById('measure').style.display = 'block';
        document.getElementById('fragrance').style.display = 'block';
        document.getElementById('color').style.display = 'none';
        document.getElementById('material').style.display = 'none';
        document.getElementById('size').style.display = 'none';
        document.getElementById('flavor').style.display = 'none';
        break;
      case '4':

        document.getElementById('color').style.display = 'grid';
        document.getElementById('material').style.display = 'block';
        document.getElementById('size').style.display = 'block';
        document.getElementById('flavor').style.display = 'none';
        document.getElementById('fragrance').style.display = 'none';
        document.getElementById('measure').style.display = 'none';
        break;
    }
  }