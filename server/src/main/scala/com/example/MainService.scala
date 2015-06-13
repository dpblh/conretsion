package com.example

import akka.actor.Actor
import com.example.model.{Convertible, Rate}
import com.example.service.RateService
import spray.routing._
import spray.http._
import MediaTypes._


class MainServiceActor extends Actor with MainService {

  def actorRefFactory = context

  def receive = runRoute(apiRoute ~ staticRoute)
}

trait MainService extends HttpService {

  import spray.httpx.SprayJsonSupport._
  import com.example.model.RateJsonProtocol._
  import com.example.model.ConvertibleJsonProtocol._

  val apiRoute = {
    path("convert") {
      post {
        respondWithMediaType(`application/json`) {
          entity(as[Convertible]) { convertible =>
            complete(RateService.rageFromParams(convertible))
          }
        }
      }
    }
  }
  
  val staticRoute = {

    get {
      compressResponse()(getFromResourceDirectory("assets"))
    }

  }
}