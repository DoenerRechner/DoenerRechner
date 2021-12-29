<?php

/*
 * (c) Fluxter <http://fluxter.net/>
 * You are not allowed to see or use this code if you are not a part of Fluxter!
 */

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    #[Route('/', name: 'homepage')]
    public function index(): Response
    {
        return $this->render('base.html.twig');
    }
}
