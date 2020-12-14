import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { CardBody, CardTitle } from 'reactstrap'
import "../../CSS/TestColumn.css"

export const TestColumn = () => {
    return (
        <div className="row testrow d-flex justify-content-space-between">
            <div col-6>
                    <div class="card profile-card-4">
                    <div class="card-img-block">
                        <img src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b" alt="profile" class="card-img-top" />
                    </div>
                    <div class="card-body pt-0">
                        <p class="card-text">Look at the tests you attempted and see where you stand among your peers!</p>
                        <a href="/attemptedTests" class="btn btn-outline-dark btn-block">Attempted Tests</a>
                    </div>
                </div>
            </div>
            <div col-6>
            <div class="card profile-card-4">
                    <div class="card-img-block">
                        <img src="https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3" alt="profile" class="card-img-top" />
                    </div>
                    <div class="card-body pt-0">
                        <p class="card-text">Attempt a live test to test your understanding of the concepts!</p>
                        <a href="/testlist" class="btn btn-outline-dark btn-block">Live Test</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
