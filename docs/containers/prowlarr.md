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
<tr><td><div id="tag19258" onclick="CopyToClipboard('tag19258');return false;" class="tag-decoration">nightly</div><div id="tag28659" onclick="CopyToClipboard('tag28659');return false;" class="tag-decoration">nightly-0cf5444</div><div id="tag32071" onclick="CopyToClipboard('tag32071');return false;" class="tag-decoration">nightly-3.1.0.5788</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/0cf544455e7c1353ac879496775c6c1aa5533f8b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/44396657131" target="_blank">2026-11-18 20:58:48</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1208" onclick="CopyToClipboard('tag1208');return false;" class="tag-decoration">release</div><div id="tag31422" onclick="CopyToClipboard('tag31422');return false;" class="tag-decoration">release-9c0fc39</div><div id="tag23455" onclick="CopyToClipboard('tag23455');return false;" class="tag-decoration">release-3.0.2.5780</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/9c0fc39ce1522d5926d42749f14db96cd103843a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/43971949425" target="_blank">2026-11-16 22:38:06</a></td></tr>
<tr><td><div id="tag13825" onclick="CopyToClipboard('tag13825');return false;" class="tag-decoration">testing</div><div id="tag8330" onclick="CopyToClipboard('tag8330');return false;" class="tag-decoration">testing-b96fb84</div><div id="tag15061" onclick="CopyToClipboard('tag15061');return false;" class="tag-decoration">testing-3.0.2.5780</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/b96fb843235eda15243b46959dbac46cd2874c2d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/43971946381" target="_blank">2026-11-16 22:38:03</a></td></tr>
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
