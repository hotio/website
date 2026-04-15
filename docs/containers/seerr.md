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
<tr><td><div id="tag6401" onclick="CopyToClipboard('tag6401');return false;" class="tag-decoration">nightly</div><div id="tag21535" onclick="CopyToClipboard('tag21535');return false;" class="tag-decoration">nightly-2cef705</div><div id="tag30620" onclick="CopyToClipboard('tag30620');return false;" class="tag-decoration">nightly-1cc73a832b458a6153e493658aae07d06089a1e5</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/2cef705f12c4cc2fbc2d39fbfbba5bfcec2b6bb3" target="_blank">Version update: ff469cb6d7c8c45984cc008403736c83d8e9dc94 => 1cc73a832b458a6153e493658aae07d06089a1e5</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/24458743698" target="_blank">2026-04-15 13:58:24</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6380" onclick="CopyToClipboard('tag6380');return false;" class="tag-decoration">release</div><div id="tag16788" onclick="CopyToClipboard('tag16788');return false;" class="tag-decoration">release-5df35e9</div><div id="tag26903" onclick="CopyToClipboard('tag26903');return false;" class="tag-decoration">release-3.1.1</div><div id="tag28524" onclick="CopyToClipboard('tag28524');return false;" class="tag-decoration">release-v3</div><div id="tag1677" onclick="CopyToClipboard('tag1677');return false;" class="tag-decoration">release-v3.1</div><div id="tag2185" onclick="CopyToClipboard('tag2185');return false;" class="tag-decoration">release-v3.1.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/5df35e92231e7322a1023b380bc38ee7bb10d441" target="_blank">Version update: 3.1.0 => 3.1.1</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/24352708598" target="_blank">2026-04-13 15:47:00</a></td></tr>
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
