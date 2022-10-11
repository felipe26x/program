// importacion para poder utilizar las query  o solicitar datos


import { pool } from "../db.js";



// funcion para obtener los usuarios
export const GetEemployee = async(req,res) => {

    try {
        const [users] = await pool.query('SELECT * FROM employee') 

        res.json(users)
        
    } catch (error) {
        
        return res.status(500).json({
            message : "hay un error en el servidor"
        })
        

    } 

    

    

  
}




// funcion para obtener un solo usuario

export const GetUser = async(req,res) => {

   try {
    const [rows]  =  await pool.query('SELECT * FROM employee WHERE id= ?', [req.params.id])
    
    res.json(rows[0])
    
   } catch (error) {

    
    return res.status(500).json({
        message : "hay un error en el servidor"
    })
    
   }
   
}




// funcion para crear usuarios

export const PostEemployee = async(req,res) => {


    try {
        const {name , salary} =  req.body
        const rows = await pool.query('INSERT INTO employee(name,salary) Values(?,?)', [name, salary])
     
        res.send({
          id : rows.insertId,
          name,
          salary

        })

        
    } catch (error) {
        
    return res.status(500).json({
        message : "hay un error en el servidor"
    })
        
    }

    
}


// funcion para actualizar los usuarios

export const PutEemployee = async(req,res) => {


    try {

    const {id} = req.params
    const {name , salary } = req.body

    const [actualizar] = await pool.query('UPDATE employee  SET name= IFNULL(? , name ) , salary= IFNULL(?, salary)  WHERE id = ?', [name, salary, id])

    if (actualizar.affectedRows === 0) return res.status(404).json({

        message : " usuario  no encontrado"
    })


    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])

    res.json(rows)
        
    } catch (error) {

             
    return res.status(500).json({
        message : "hay un error en el servidor"
    })
        
    }


    
}


// funcion para eliminar los usuarios

export const DeleteEemployee = async(req,res) => {

    try {

        const  [Delete] = await pool.query('SELECT * FROM employee WHERE id=?', [req.params.id])

        console.log(Delete)
        res.send("usuario elimando correctamente")
        
    } catch (error) {

        return res.status(500).json({
            message : "hay un error en el servidor"
        })
        
    }


   

   
}
