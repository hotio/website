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
<tr><td><div id="tag30236" onclick="CopyToClipboard('tag30236');return false;" class="tag-decoration">nightly</div><div id="tag28931" onclick="CopyToClipboard('tag28931');return false;" class="tag-decoration">nightly-0519bec</div><div id="tag18290" onclick="CopyToClipboard('tag18290');return false;" class="tag-decoration">nightly-66130beded3059e1fb5769fe84bc06739eb4a6b0</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/0519bec7145229b13299710f1b0117e28a581ab9" target="_blank">Version update: 1cc73a832b458a6153e493658aae07d06089a1e5 => 66130beded3059e1fb5769fe84bc06739eb4a6b0</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/24462553276" target="_blank">2026-04-15 15:14:57</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32221" onclick="CopyToClipboard('tag32221');return false;" class="tag-decoration">release</div><div id="tag23585" onclick="CopyToClipboard('tag23585');return false;" class="tag-decoration">release-5df35e9</div><div id="tag18089" onclick="CopyToClipboard('tag18089');return false;" class="tag-decoration">release-3.1.1</div><div id="tag1168" onclick="CopyToClipboard('tag1168');return false;" class="tag-decoration">release-v3</div><div id="tag19468" onclick="CopyToClipboard('tag19468');return false;" class="tag-decoration">release-v3.1</div><div id="tag31206" onclick="CopyToClipboard('tag31206');return false;" class="tag-decoration">release-v3.1.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/5df35e92231e7322a1023b380bc38ee7bb10d441" target="_blank">Version update: 3.1.0 => 3.1.1</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/24352708598" target="_blank">2026-04-13 15:47:00</a></td></tr>
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
