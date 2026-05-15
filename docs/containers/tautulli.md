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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6808" onclick="CopyToClipboard('tag6808');return false;" class="tag-decoration">release</div><div id="tag24368" onclick="CopyToClipboard('tag24368');return false;" class="tag-decoration">release-2d95435</div><div id="tag22557" onclick="CopyToClipboard('tag22557');return false;" class="tag-decoration">release-2.17.1</div><div id="tag15285" onclick="CopyToClipboard('tag15285');return false;" class="tag-decoration">release-v2</div><div id="tag21366" onclick="CopyToClipboard('tag21366');return false;" class="tag-decoration">release-v2.17</div><div id="tag23154" onclick="CopyToClipboard('tag23154');return false;" class="tag-decoration">release-v2.17.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/2d95435148e8ddaec6dd79c208930fccf7bb4313" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/25927421284" target="_blank">2026-05-15 15:53:25</a></td></tr>
<tr><td><div id="tag17980" onclick="CopyToClipboard('tag17980');return false;" class="tag-decoration">testing</div><div id="tag15278" onclick="CopyToClipboard('tag15278');return false;" class="tag-decoration">testing-98a6782</div><div id="tag16723" onclick="CopyToClipboard('tag16723');return false;" class="tag-decoration">testing-2.17.1</div><div id="tag25583" onclick="CopyToClipboard('tag25583');return false;" class="tag-decoration">testing-v2</div><div id="tag22207" onclick="CopyToClipboard('tag22207');return false;" class="tag-decoration">testing-v2.17</div><div id="tag5400" onclick="CopyToClipboard('tag5400');return false;" class="tag-decoration">testing-v2.17.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/98a67824557d87f67a844cd38ee321571e0eb017" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/25931345443" target="_blank">2026-05-15 17:18:12</a></td></tr>
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
