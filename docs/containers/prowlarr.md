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
<tr><td><div id="tag4690" onclick="CopyToClipboard('tag4690');return false;" class="tag-decoration">nightly</div><div id="tag29836" onclick="CopyToClipboard('tag29836');return false;" class="tag-decoration">nightly-8a5acf3</div><div id="tag11382" onclick="CopyToClipboard('tag11382');return false;" class="tag-decoration">nightly-2.5.1.5460</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/8a5acf36530e0c0f462800583d0757347b694813" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/28978743221" target="_blank">2026-07-08 22:00:27</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26145" onclick="CopyToClipboard('tag26145');return false;" class="tag-decoration">release</div><div id="tag7390" onclick="CopyToClipboard('tag7390');return false;" class="tag-decoration">release-948fa07</div><div id="tag28528" onclick="CopyToClipboard('tag28528');return false;" class="tag-decoration">release-2.4.0.5397</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/948fa0709ed195662df42fc58ee90e2277cf1701" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/28600323697" target="_blank">2026-07-02 15:05:09</a></td></tr>
<tr><td><div id="tag23573" onclick="CopyToClipboard('tag23573');return false;" class="tag-decoration">testing</div><div id="tag2376" onclick="CopyToClipboard('tag2376');return false;" class="tag-decoration">testing-1301a07</div><div id="tag12142" onclick="CopyToClipboard('tag12142');return false;" class="tag-decoration">testing-2.5.1.5460</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/1301a07ed9eec941c3dc3703a46951914bdf0131" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/28904180643" target="_blank">2026-07-07 22:51:07</a></td></tr>
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
