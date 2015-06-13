package com.example.service

import akka.actor.ActorSystem
import com.example.model.{Convertible, Rate}
import com.example.pipelining._
import spray.httpx.SprayJsonSupport
import spray.json.{JsonFormat, JsObject, DefaultJsonProtocol}

import scala.concurrent.Await
import scala.concurrent.duration._
import scala.util.{Failure, Success}


/**
 * Cyrrency conversion service
 */
object RateService {

  implicit val system = ActorSystem("simple-spray-client")
  import system.dispatcher // execution context for futures below
  import com.example.model.RateJsonProtocol._
  import SprayJsonSupport._

  val pipeline = sendReceive ~> unmarshal[Rate]

  /**
   * Get rate from params
   * @param convertible Convertible
   * @return Rate
   */
  def rageFromParams(convertible: Convertible): Rate = {

    val responseFuture = pipeline {
      Get(s"http://rate-exchange.herokuapp.com/fetchRate?from=${convertible.from}&to=${convertible.to}")
    }

    var rate: Rate = Rate("", "", "")
    responseFuture onComplete {
      case Success(x: Rate) =>
        rate = x

      case _ =>

    }

    Await.result(responseFuture, 10.seconds)

    rate.Rate = (rate.Rate.toFloat * convertible.sum).toString
    rate
  }

}
