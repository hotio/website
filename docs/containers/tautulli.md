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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21795" onclick="CopyToClipboard('tag21795');return false;" class="tag-decoration">release</div><div id="tag24262" onclick="CopyToClipboard('tag24262');return false;" class="tag-decoration">release-b5e14f4</div><div id="tag4407" onclick="CopyToClipboard('tag4407');return false;" class="tag-decoration">release-2.18.1</div><div id="tag1498" onclick="CopyToClipboard('tag1498');return false;" class="tag-decoration">release-v2</div><div id="tag11800" onclick="CopyToClipboard('tag11800');return false;" class="tag-decoration">release-v2.18</div><div id="tag14238" onclick="CopyToClipboard('tag14238');return false;" class="tag-decoration">release-v2.18.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/b5e14f460f4f97ebbf9f8e2c2a03103876896541" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/33579916178" target="_blank">2026-09-02 01:34:05</a></td></tr>
<tr><td><div id="tag7522" onclick="CopyToClipboard('tag7522');return false;" class="tag-decoration">testing</div><div id="tag11086" onclick="CopyToClipboard('tag11086');return false;" class="tag-decoration">testing-1ce614a</div><div id="tag26066" onclick="CopyToClipboard('tag26066');return false;" class="tag-decoration">testing-2.18.1</div><div id="tag26542" onclick="CopyToClipboard('tag26542');return false;" class="tag-decoration">testing-v2</div><div id="tag6643" onclick="CopyToClipboard('tag6643');return false;" class="tag-decoration">testing-v2.18</div><div id="tag12874" onclick="CopyToClipboard('tag12874');return false;" class="tag-decoration">testing-v2.18.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/1ce614aa903a38832c0fbb94cb1529a9474cd95b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/33579914541" target="_blank">2026-09-02 01:34:03</a></td></tr>
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
