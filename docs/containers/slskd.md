---
hide:
  - toc
title: hotio/slskd
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/slskd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/slskd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project (GNU AGPL-3.0 license)](https://github.com/slskd/slskd){ class="header-links" target="_blank" rel="noopener" }  

!!! question
    If the community feels that we should switch to the more feature rich fork [slskdn](https://github.com/snapetech/slskdn), feel free to join the discord server and let your opinion be heard.

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div id="tag20022" onclick="CopyToClipboard('tag20022');return false;" class="tag-decoration">nightly</div><div id="tag135" onclick="CopyToClipboard('tag135');return false;" class="tag-decoration">nightly-0afee6d</div><div id="tag18" onclick="CopyToClipboard('tag18');return false;" class="tag-decoration">nightly-0.24.3.65534-9c1c726f</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/0afee6d7447c9bb74d64e1dfb998254930395402" target="_blank">Upstream update: alpinevpn-5063227 => alpinevpn-7a36f80</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/21132237048" target="_blank">2026-01-19 09:31:08</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23347" onclick="CopyToClipboard('tag23347');return false;" class="tag-decoration">release</div><div id="tag31437" onclick="CopyToClipboard('tag31437');return false;" class="tag-decoration">release-dbae576</div><div id="tag28683" onclick="CopyToClipboard('tag28683');return false;" class="tag-decoration">release-0.24.3</div><div id="tag22688" onclick="CopyToClipboard('tag22688');return false;" class="tag-decoration">release-v0</div><div id="tag6649" onclick="CopyToClipboard('tag6649');return false;" class="tag-decoration">release-v0.24</div><div id="tag7036" onclick="CopyToClipboard('tag7036');return false;" class="tag-decoration">release-v0.24.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/dbae57692dc530c244425f6be0bcdfaf2fd1b869" target="_blank">Upstream update: alpinevpn-5063227 => alpinevpn-7a36f80</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/21132237358" target="_blank">2026-01-19 09:31:09</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="slskd" \
        -p 5030:5030 \
        -p 5031:5031 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5030/tcp,5031/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/slskd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      slskd:
        container_name: slskd
        image: ghcr.io/hotio/slskd
        ports:
          - "5030:5030"
          - "5031:5031"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5030/tcp,5031/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
