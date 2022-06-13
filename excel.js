let selectedFile;
console.log(window.XLSX);
document.getElementById('input').addEventListener("change", (event) => {
    selectedFile = event.target.files[0];
})

let data=[{
    "name":"jayanth",
    "data":"scd",
    "abc":"sdef"
}]

// console.log("just checking : ", newData);
let array = JSON.parse(JSON.stringify(newData))
console.log("array checkiing : ", array);

function searchId (tax_name) {
  for(let i = 2; i < array.length; i++){
    if(array[i].tax_name == tax_name){
      return array[i].id;
    }
  }
}


document.getElementById('button').addEventListener("click", () => {
    XLSX.utils.json_to_sheet(data, 'out.xlsx');
    if(selectedFile){
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event)=>{
         let data = event.target.result;
         let workbook = XLSX.read(data,{type:"binary"});
         let dataList = [];

         workbook.SheetNames.forEach(sheet => {
              let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
              console.log(rowObject);
              for(let i = 2 ; i < rowObject.length; i++){
                let singleObj = {};
                if(rowObject[i].__EMPTY_9){
                    singleObj = {
                        "id": rowObject[i].__EMPTY_1,
                        "parent_id": rowObject[i].__EMPTY_2 || '',
                        "tax_name": rowObject[i].__EMPTY_9,
                        "tier": [
                          {
                            "name": rowObject[i].__EMPTY_4,
                            "id": searchId(rowObject[i].__EMPTY_4) || ""
                          },
                          {
                            "name": rowObject[i].__EMPTY_5,
                            "id": searchId(rowObject[i].__EMPTY_5) || ""
                          },
                          {
                            "name": rowObject[i].__EMPTY_6,
                            "id": searchId(rowObject[i].__EMPTY_6) || ""
                          },
                          {
                            "name": rowObject[i].__EMPTY_7,
                            "id": searchId(rowObject[i].__EMPTY_7) || ""
                          },
                          {
                            "name": rowObject[i].__EMPTY_8,
                            "id": rowObject[i].__EMPTY_2
                          },
                          {
                            "name": rowObject[i].__EMPTY_9,
                            "id": rowObject[i].__EMPTY_1
                          }
                        ]
                    }
                    dataList.push(singleObj);
                }  
                else if (rowObject[i].__EMPTY_8) {
                    singleObj = {
                        "id": rowObject[i].__EMPTY_1,
                        "parent_id": rowObject[i].__EMPTY_2 || '',
                        "tax_name": rowObject[i].__EMPTY_8,
                        "tier": [
                          {
                            "name": rowObject[i].__EMPTY_4,
                            "id": searchId(rowObject[i].__EMPTY_4) || ""
                          },
                          {
                            "name": rowObject[i].__EMPTY_5,
                            "id": searchId(rowObject[i].__EMPTY_5) || ""
                          },
                          {
                            "name": rowObject[i].__EMPTY_6,
                            "id": searchId(rowObject[i].__EMPTY_6) || ""
                          },
                          {
                            "name": rowObject[i].__EMPTY_7,
                            "id": rowObject[i].__EMPTY_2
                          },
                          {
                            "name": rowObject[i].__EMPTY_8,
                            "id": rowObject[i].__EMPTY_1
                          }
                        ]
                    }
                    dataList.push(singleObj);
                } 
                else if (rowObject[i].__EMPTY_7) {
                    singleObj = {
                        "id": rowObject[i].__EMPTY_1,
                        "parent_id": rowObject[i].__EMPTY_2 || '',
                        "tax_name": rowObject[i].__EMPTY_7,
                        "tier": [
                          {
                            "name": rowObject[i].__EMPTY_4,
                            "id": searchId(rowObject[i].__EMPTY_4) || ""
                          },
                          {
                            "name": rowObject[i].__EMPTY_5,
                            "id": searchId(rowObject[i].__EMPTY_5) || ""
                          },
                          {
                            "name": rowObject[i].__EMPTY_6,
                            "id": rowObject[i].__EMPTY_2
                          },
                          {
                            "name": rowObject[i].__EMPTY_7,
                            "id": rowObject[i].__EMPTY_1
                          }
                        ]
                    }
                    dataList.push(singleObj);
                } 
                else if (rowObject[i].__EMPTY_6) {
                    singleObj = {
                        "id": rowObject[i].__EMPTY_1,
                        "parent_id": rowObject[i].__EMPTY_2 || '',
                        "tax_name": rowObject[i].__EMPTY_6,
                        "tier": [
                          {
                            "name": rowObject[i].__EMPTY_4,
                            "id": searchId(rowObject[i].__EMPTY_4) || ""
                          },
                          {
                            "name": rowObject[i].__EMPTY_5,
                            "id": rowObject[i].__EMPTY_2
                          },
                          {
                            "name": rowObject[i].__EMPTY_6,
                            "id": rowObject[i].__EMPTY_1
                          }
                        ]
                    }
                    dataList.push(singleObj);
                } 
                else if (rowObject[i].__EMPTY_5) {
                    singleObj = {
                        "id": rowObject[i].__EMPTY_1,
                        "parent_id": rowObject[i].__EMPTY_2 || '',
                        "tax_name": rowObject[i].__EMPTY_5,
                        "tier": [
                          {
                            "name": rowObject[i].__EMPTY_4,
                            "id": rowObject[i].__EMPTY_2
                          },
                          {
                            "name": rowObject[i].__EMPTY_5,
                            "id": rowObject[i].__EMPTY_1
                          }
                        ]
                    }
                    dataList.push(singleObj);
                } 
                else if (rowObject[i].__EMPTY_4) {
                    singleObj = {
                        "id": rowObject[i].__EMPTY_1,
                        "parent_id": rowObject[i].__EMPTY_2 || '',
                        "tax_name": rowObject[i].__EMPTY_4,
                        "tier": [
                          {
                            "name": rowObject[i].__EMPTY_4,
                            "id": rowObject[i].__EMPTY_1
                          }
                        ]
                    }
                    dataList.push(singleObj);
                } 
              }
         });
        document.getElementById("jsondata").innerHTML = JSON.stringify(dataList, null, 4);
        }
    }
});



