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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1086" onclick="CopyToClipboard('tag1086');return false;" class="tag-decoration">release</div><div id="tag21100" onclick="CopyToClipboard('tag21100');return false;" class="tag-decoration">release-4611a6d</div><div id="tag97" onclick="CopyToClipboard('tag97');return false;" class="tag-decoration">release-2.18.1</div><div id="tag31449" onclick="CopyToClipboard('tag31449');return false;" class="tag-decoration">release-v2</div><div id="tag30380" onclick="CopyToClipboard('tag30380');return false;" class="tag-decoration">release-v2.18</div><div id="tag3521" onclick="CopyToClipboard('tag3521');return false;" class="tag-decoration">release-v2.18.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/4611a6dbcae147d5a7af49ab05cbe0a9b6f8e76e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/35696961504" target="_blank">2026-09-22 06:54:11</a></td></tr>
<tr><td><div id="tag20770" onclick="CopyToClipboard('tag20770');return false;" class="tag-decoration">testing</div><div id="tag1071" onclick="CopyToClipboard('tag1071');return false;" class="tag-decoration">testing-a9d96f5</div><div id="tag30031" onclick="CopyToClipboard('tag30031');return false;" class="tag-decoration">testing-2.18.1</div><div id="tag18798" onclick="CopyToClipboard('tag18798');return false;" class="tag-decoration">testing-v2</div><div id="tag24924" onclick="CopyToClipboard('tag24924');return false;" class="tag-decoration">testing-v2.18</div><div id="tag6814" onclick="CopyToClipboard('tag6814');return false;" class="tag-decoration">testing-v2.18.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/a9d96f5a9b83f9bf10341c7dba03082dc6b93b98" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/35381547774" target="_blank">2026-09-18 18:40:21</a></td></tr>
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
