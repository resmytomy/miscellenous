class fileEditorController{ 
    writeFileController (req, res)  {
    const FileUtil=require('../service/fileutil')
    const futil=new FileUtil();

    console.log('inside write!');
    futil.write('npmrc',req)

.then(data =>res.json(data))

.catch(err => res.send(err))


    //res.send( futil.write('npmrc',req));
}
readFileController= (req, res) => {
    console.log('controllere')
    const FileUtil=require('../service/fileutil')
    const futil=new FileUtil();

    console.log('inside get');

futil.getFile('npmrc')

.then(data =>res.json(data))

.catch(err => res.send(err))

}


}
module.exports=fileEditorController;