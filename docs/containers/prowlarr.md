---
hide:
  - toc
title: hotio/prowlarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/prowlarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/prowlarr/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag6861" onclick="CopyToClipboard('tag6861');return false;" class="tag-decoration">nightly</div><div id="tag5010" onclick="CopyToClipboard('tag5010');return false;" class="tag-decoration">nightly-257b447</div><div id="tag27737" onclick="CopyToClipboard('tag27737');return false;" class="tag-decoration">nightly-2.5.1.5460</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/257b447a4a443bcfddb66fb4f1e81a4ea49b5be0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/28754371489" target="_blank">2026-07-05 20:46:21</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26848" onclick="CopyToClipboard('tag26848');return false;" class="tag-decoration">release</div><div id="tag24811" onclick="CopyToClipboard('tag24811');return false;" class="tag-decoration">release-948fa07</div><div id="tag11556" onclick="CopyToClipboard('tag11556');return false;" class="tag-decoration">release-2.4.0.5397</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/948fa0709ed195662df42fc58ee90e2277cf1701" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/28600323697" target="_blank">2026-07-02 15:05:09</a></td></tr>
<tr><td><div id="tag5604" onclick="CopyToClipboard('tag5604');return false;" class="tag-decoration">testing</div><div id="tag1971" onclick="CopyToClipboard('tag1971');return false;" class="tag-decoration">testing-1301a07</div><div id="tag4986" onclick="CopyToClipboard('tag4986');return false;" class="tag-decoration">testing-2.5.1.5460</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/1301a07ed9eec941c3dc3703a46951914bdf0131" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/28904180643" target="_blank">2026-07-07 22:51:07</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="prowlarr" \
        -p 9696:9696 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9696/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/prowlarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      prowlarr:
        container_name: prowlarr
        image: ghcr.io/hotio/prowlarr
        ports:
          - "9696:9696"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9696/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
