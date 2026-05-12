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
<tr><td><div id="tag30966" onclick="CopyToClipboard('tag30966');return false;" class="tag-decoration">nightly</div><div id="tag25669" onclick="CopyToClipboard('tag25669');return false;" class="tag-decoration">nightly-7089c88</div><div id="tag11183" onclick="CopyToClipboard('tag11183');return false;" class="tag-decoration">nightly-2.4.0.5368</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/7089c88f3ee3e1d8b1c10b43e19b3546e484389c" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/25707193740" target="_blank">2026-05-12 01:15:56</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9936" onclick="CopyToClipboard('tag9936');return false;" class="tag-decoration">release</div><div id="tag23715" onclick="CopyToClipboard('tag23715');return false;" class="tag-decoration">release-1b493dc</div><div id="tag1779" onclick="CopyToClipboard('tag1779');return false;" class="tag-decoration">release-2.3.5.5327</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/1b493dc5c2444b7d3c9e5e94f1cdd92821fca7db" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/25708413253" target="_blank">2026-05-12 01:52:21</a></td></tr>
<tr><td><div id="tag21298" onclick="CopyToClipboard('tag21298');return false;" class="tag-decoration">testing</div><div id="tag8089" onclick="CopyToClipboard('tag8089');return false;" class="tag-decoration">testing-08ac340</div><div id="tag15673" onclick="CopyToClipboard('tag15673');return false;" class="tag-decoration">testing-2.3.7.5365</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/08ac3403949c424db61a494ad6603e729cafc1c3" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/25707200441" target="_blank">2026-05-12 01:16:08</a></td></tr>
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
