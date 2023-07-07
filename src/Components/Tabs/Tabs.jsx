import  { PureComponent } from 'react';
import React from 'react';
import { ActiveTab, TabContent, TabsContsiner, TabsList, TabTitle, TabBtn, TabItem } from './Tabs.styled';

export class Tabs extends PureComponent{

    state = {
        activeTabIndex: 0,
    }

    // можна замінити на PureComponent

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextState.activeTabIndex !== this.state.activeTabIndex;
    // };

    setActiveIndex = (index) => {
        this.setState({ activeTabIndex: index });
    }
    
    render() {
        const {label} = this.props.tabs[this.state.activeTabIndex];        
        const {content} = this.props.tabs[this.state.activeTabIndex]; 
        return (
            <TabContent>
                <TabsContsiner>
                    <TabTitle>
                        it is  {label} tab
                    </TabTitle>
                    <TabsList >
                        {this.props.tabs.map(({ label },  index) =>
                            <TabItem
                                key={label}
                            >
                                <TabBtn
                                    
                                    // index={index}
                                    style={{border:
                                    index === this.state.activeTabIndex ?
                                        `4px solid black` : `none`
                                    }}
                                    onClick={()=>{this.setActiveIndex(index)}}
                                >
                                    {label}
                                </TabBtn>
                            </TabItem>
                        )}
                        
                    </TabsList>
                </TabsContsiner>
                <ActiveTab content={this.props.tabs.content}>
                    <h2>{label }</h2>
                    <p>{content }</p>
                </ActiveTab>
                    
            </TabContent>
        )
    }
}

