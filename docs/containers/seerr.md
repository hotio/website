---
hide:
  - toc
title: hotio/seerr
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag6201" onclick="CopyToClipboard('tag6201');return false;" class="tag-decoration">nightly</div><div id="tag26570" onclick="CopyToClipboard('tag26570');return false;" class="tag-decoration">nightly-a822791</div><div id="tag1597" onclick="CopyToClipboard('tag1597');return false;" class="tag-decoration">nightly-0a1f7035d0332fb2e14dce67cee13cc061e706fb</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/a8227911a2b6cfb4c079d22aeb25afd5f7e741a8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/27811320747" target="_blank">2026-06-19 07:13:48</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8150" onclick="CopyToClipboard('tag8150');return false;" class="tag-decoration">release</div><div id="tag11784" onclick="CopyToClipboard('tag11784');return false;" class="tag-decoration">release-f3ec195</div><div id="tag13079" onclick="CopyToClipboard('tag13079');return false;" class="tag-decoration">release-3.3.0</div><div id="tag32449" onclick="CopyToClipboard('tag32449');return false;" class="tag-decoration">release-v3</div><div id="tag23567" onclick="CopyToClipboard('tag23567');return false;" class="tag-decoration">release-v3.3</div><div id="tag8864" onclick="CopyToClipboard('tag8864');return false;" class="tag-decoration">release-v3.3.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/f3ec195ca7380f39c333de0b570c5c901e86b3c9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/27276140705" target="_blank">2026-06-10 12:26:49</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5055/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
