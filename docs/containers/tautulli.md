---
hide:
  - toc
title: hotio/tautulli
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/tautulli){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/tautulli){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/tautulli/tautulli){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18739" onclick="CopyToClipboard('tag18739');return false;" class="tag-decoration">release</div><div id="tag29618" onclick="CopyToClipboard('tag29618');return false;" class="tag-decoration">release-7a37815</div><div id="tag18191" onclick="CopyToClipboard('tag18191');return false;" class="tag-decoration">release-2.16.0</div><div id="tag24561" onclick="CopyToClipboard('tag24561');return false;" class="tag-decoration">release-v2</div><div id="tag24952" onclick="CopyToClipboard('tag24952');return false;" class="tag-decoration">release-v2.16</div><div id="tag11386" onclick="CopyToClipboard('tag11386');return false;" class="tag-decoration">release-v2.16.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/7a378154bdb398c0e4629b331527f510f4720d1f" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21124056137" target="_blank">2026-01-19 03:14:19</a></td></tr>
<tr><td><div id="tag20774" onclick="CopyToClipboard('tag20774');return false;" class="tag-decoration">testing</div><div id="tag11302" onclick="CopyToClipboard('tag11302');return false;" class="tag-decoration">testing-b541cb7</div><div id="tag16442" onclick="CopyToClipboard('tag16442');return false;" class="tag-decoration">testing-2.16.0</div><div id="tag29141" onclick="CopyToClipboard('tag29141');return false;" class="tag-decoration">testing-v2</div><div id="tag6931" onclick="CopyToClipboard('tag6931');return false;" class="tag-decoration">testing-v2.16</div><div id="tag27600" onclick="CopyToClipboard('tag27600');return false;" class="tag-decoration">testing-v2.16.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/b541cb7c71c7c961f260659bdd55555b0d4778ee" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21124056663" target="_blank">2026-01-19 03:14:20</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="tautulli" \
        -p 8181:8181 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8181/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/tautulli
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      tautulli:
        container_name: tautulli
        image: ghcr.io/hotio/tautulli
        ports:
          - "8181:8181"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8181/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
