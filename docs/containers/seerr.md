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
<tr><td><div id="tag31599" onclick="CopyToClipboard('tag31599');return false;" class="tag-decoration">nightly</div><div id="tag31929" onclick="CopyToClipboard('tag31929');return false;" class="tag-decoration">nightly-7abc639</div><div id="tag12948" onclick="CopyToClipboard('tag12948');return false;" class="tag-decoration">nightly-8759263e124f8cbf7990c9dfcb9816e94dee56a8</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/7abc639a33e60bf2ebdfb0bceaee331e16f1d7b9" target="_blank">Version update: 7aa1470ce6a2a56d4bb7a92d14f4c72cb065b746 => 8759263e124f8cbf7990c9dfcb9816e94dee56a8</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/25817943850" target="_blank">2026-05-13 18:17:21</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag26411" onclick="CopyToClipboard('tag26411');return false;" class="tag-decoration">release</div><div id="tag7918" onclick="CopyToClipboard('tag7918');return false;" class="tag-decoration">release-515b38f</div><div id="tag13366" onclick="CopyToClipboard('tag13366');return false;" class="tag-decoration">release-3.2.0</div><div id="tag3917" onclick="CopyToClipboard('tag3917');return false;" class="tag-decoration">release-v3</div><div id="tag19539" onclick="CopyToClipboard('tag19539');return false;" class="tag-decoration">release-v3.2</div><div id="tag29481" onclick="CopyToClipboard('tag29481');return false;" class="tag-decoration">release-v3.2.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/515b38fe138874f893bf72af5f6e90d4e0996d96" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/25715025698" target="_blank">2026-05-12 05:18:50</a></td></tr>
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
