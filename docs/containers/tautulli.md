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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag612" onclick="CopyToClipboard('tag612');return false;" class="tag-decoration">release</div><div id="tag20762" onclick="CopyToClipboard('tag20762');return false;" class="tag-decoration">release-3f51317</div><div id="tag1942" onclick="CopyToClipboard('tag1942');return false;" class="tag-decoration">release-2.18.0</div><div id="tag23800" onclick="CopyToClipboard('tag23800');return false;" class="tag-decoration">release-v2</div><div id="tag7031" onclick="CopyToClipboard('tag7031');return false;" class="tag-decoration">release-v2.18</div><div id="tag31471" onclick="CopyToClipboard('tag31471');return false;" class="tag-decoration">release-v2.18.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/3f51317beac275742f43d18ddd92477ec821ebee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/32922092461" target="_blank">2026-08-26 02:16:05</a></td></tr>
<tr><td><div id="tag12394" onclick="CopyToClipboard('tag12394');return false;" class="tag-decoration">testing</div><div id="tag15076" onclick="CopyToClipboard('tag15076');return false;" class="tag-decoration">testing-3708240</div><div id="tag5162" onclick="CopyToClipboard('tag5162');return false;" class="tag-decoration">testing-2.18.1</div><div id="tag19355" onclick="CopyToClipboard('tag19355');return false;" class="tag-decoration">testing-v2</div><div id="tag32350" onclick="CopyToClipboard('tag32350');return false;" class="tag-decoration">testing-v2.18</div><div id="tag23945" onclick="CopyToClipboard('tag23945');return false;" class="tag-decoration">testing-v2.18.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/37082404120112a05b8405fbfbd85fbc8bb63d25" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/33125670124" target="_blank">2026-08-27 23:16:11</a></td></tr>
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
