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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23355" onclick="CopyToClipboard('tag23355');return false;" class="tag-decoration">release</div><div id="tag13413" onclick="CopyToClipboard('tag13413');return false;" class="tag-decoration">release-6824e70</div><div id="tag15569" onclick="CopyToClipboard('tag15569');return false;" class="tag-decoration">release-2.18.1</div><div id="tag6482" onclick="CopyToClipboard('tag6482');return false;" class="tag-decoration">release-v2</div><div id="tag16146" onclick="CopyToClipboard('tag16146');return false;" class="tag-decoration">release-v2.18</div><div id="tag21887" onclick="CopyToClipboard('tag21887');return false;" class="tag-decoration">release-v2.18.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/6824e70461e6373379af9efd84fce2e6683a9130" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/33498214996" target="_blank">2026-09-01 10:35:40</a></td></tr>
<tr><td><div id="tag9694" onclick="CopyToClipboard('tag9694');return false;" class="tag-decoration">testing</div><div id="tag23658" onclick="CopyToClipboard('tag23658');return false;" class="tag-decoration">testing-b3f5250</div><div id="tag3568" onclick="CopyToClipboard('tag3568');return false;" class="tag-decoration">testing-2.18.1</div><div id="tag18379" onclick="CopyToClipboard('tag18379');return false;" class="tag-decoration">testing-v2</div><div id="tag30699" onclick="CopyToClipboard('tag30699');return false;" class="tag-decoration">testing-v2.18</div><div id="tag18634" onclick="CopyToClipboard('tag18634');return false;" class="tag-decoration">testing-v2.18.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/b3f525010eb60256e4857e352fec6d7056c4d2bc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/33524589195" target="_blank">2026-09-01 15:15:06</a></td></tr>
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
