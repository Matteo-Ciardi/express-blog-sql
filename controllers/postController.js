// let posts = require('../data/postsContent.js');

const connection = require('../data/db.js');

function index(req, res) {
    const sql = 'SELECT * FROM posts';

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        res.json(results);
    });
}

function show(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
        res.status(404)

        return res.json({
            error: "Post non trovato",
            message: `Il post con id ${id} non esiste`
        });
    }

    res.json(post);
}

function store(req, res) {
    console.log('Dati ricevuti:', req.body);

    const newId = Math.max(...posts.map(p => p.id)) + 1;

    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    };

    posts.push(newPost);

    res.status(201).json(newPost);
}

function update(req, res) {
    const id = parseInt(req.params.id);

    console.log('Aggiornamento post con id:', id);
    console.log('Nuovi dati:', req.body);

    const postIndex = posts.findIndex(p => p.id === id);

    if (postIndex === -1) {
        res.status(404);
        return res.json({
            error: "Post non trovato",
            message: `Il post con id ${id} non esiste`
        });
    }

    const updatedPost = {
        id: id,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    };

    posts[postIndex] = updatedPost;

    res.json(updatedPost);
}

function modify(req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
}

function destroy(req, res) { 
    const { id } = req.params;
    const sql = 'DELETE FROM posts WHERE id = ?'
                       
    connection.query(sql, [id], (err) => {
        if (err) return res.status(500).json({ error: 'Failed to delete post' });
        res.sendStatus(204)
    });
}

module.exports = { index, show, store, update, modify, destroy };