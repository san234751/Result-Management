const csvtojson=require('csvtojson');
const PostSchema=require('./module/module');
const filepath='/home/san234/backend/first/csvfile/Session_ SORTED 3 Even Semester Semester_4 Department_EE - Sheet1.csv';
const UploadFile= async ()=> {
    let JsonObject=[];
    await csvtojson().fromFile(filepath).then((jsonobject)=>JsonObject=jsonobject);
    for(let i=0;i<JsonObject.length;i++){
        const val=JSON.parse(JSON.stringify(JsonObject[i]));
        const schema=new PostSchema(
            {
                overall_rank:val['Overall_rank'],
                Registration_NO:val['Regn. No.'],
                Semester_Rank:val['Semester_Rank'],
                Subject1:val['CS 221'],
                Subject2:val['EE 206'],
                Subject3:val['EE 207'],
                Subject4:val['EE 208'],
                Subject5:val['EE 209'],
                Subject6:val['EE 210'],
                Subject7:val['EE 213'],
                Subject8:val['EE 214'],
                Subject9:val['EE 215'],
                GP:val['GP'],
                SGPA:val['SGPA'],
                CGPA:val['CGPA'],
            }
        );
        await schema.save();
    }
}
module.exports=UploadFile;