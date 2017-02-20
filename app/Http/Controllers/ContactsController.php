<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //времменая заглушка
        $contacts = [['name' => 'Петя', 'age' => '23', 'occupation' => 'Директор'],
            ['name' => 'Вася', 'age' => '14', 'occupation' => 'Студент'],
            ['name' => 'Федя', 'age' => '60', 'occupation' => 'Охраник'],
            ['name' => 'Измаил', 'age' => '20', 'occupation' => 'Программист'],
            ['name' => 'Олеся', 'age' => '18', 'occupation' => 'Бухгалтер'],
        ];

        echo json_encode($contacts);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $contacts = [['name' => 'Петя', 'age' => '23', 'occupation' => 'Директор']];
        echo json_encode($contacts);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
