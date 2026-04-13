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
<tr><td><div id="tag9952" onclick="CopyToClipboard('tag9952');return false;" class="tag-decoration">nightly</div><div id="tag3013" onclick="CopyToClipboard('tag3013');return false;" class="tag-decoration">nightly-f06b795</div><div id="tag5925" onclick="CopyToClipboard('tag5925');return false;" class="tag-decoration">nightly-a1339307e18647c936e8eccbb2f6c842f771e7ed</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/f06b79527d083125cc46d6adec81d1b023a0e029" target="_blank">Version update: 43eff257e17e781b126f633327117a0d1b43d318 => a1339307e18647c936e8eccbb2f6c842f771e7ed</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/24335400903" target="_blank">2026-04-13 09:13:18</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8861" onclick="CopyToClipboard('tag8861');return false;" class="tag-decoration">release</div><div id="tag3414" onclick="CopyToClipboard('tag3414');return false;" class="tag-decoration">release-5df35e9</div><div id="tag3563" onclick="CopyToClipboard('tag3563');return false;" class="tag-decoration">release-3.1.1</div><div id="tag2449" onclick="CopyToClipboard('tag2449');return false;" class="tag-decoration">release-v3</div><div id="tag2105" onclick="CopyToClipboard('tag2105');return false;" class="tag-decoration">release-v3.1</div><div id="tag4913" onclick="CopyToClipboard('tag4913');return false;" class="tag-decoration">release-v3.1.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/5df35e92231e7322a1023b380bc38ee7bb10d441" target="_blank">Version update: 3.1.0 => 3.1.1</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/24352708598" target="_blank">2026-04-13 15:47:00</a></td></tr>
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
