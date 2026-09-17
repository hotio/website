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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10864" onclick="CopyToClipboard('tag10864');return false;" class="tag-decoration">release</div><div id="tag31843" onclick="CopyToClipboard('tag31843');return false;" class="tag-decoration">release-03eedd5</div><div id="tag22681" onclick="CopyToClipboard('tag22681');return false;" class="tag-decoration">release-2.18.1</div><div id="tag3364" onclick="CopyToClipboard('tag3364');return false;" class="tag-decoration">release-v2</div><div id="tag11586" onclick="CopyToClipboard('tag11586');return false;" class="tag-decoration">release-v2.18</div><div id="tag12096" onclick="CopyToClipboard('tag12096');return false;" class="tag-decoration">release-v2.18.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/03eedd50f2d72d1bed7016436361038fd595e74e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/35271898641" target="_blank">2026-09-17 20:37:08</a></td></tr>
<tr><td><div id="tag15095" onclick="CopyToClipboard('tag15095');return false;" class="tag-decoration">testing</div><div id="tag4101" onclick="CopyToClipboard('tag4101');return false;" class="tag-decoration">testing-720a6fb</div><div id="tag21113" onclick="CopyToClipboard('tag21113');return false;" class="tag-decoration">testing-2.18.1</div><div id="tag10954" onclick="CopyToClipboard('tag10954');return false;" class="tag-decoration">testing-v2</div><div id="tag9455" onclick="CopyToClipboard('tag9455');return false;" class="tag-decoration">testing-v2.18</div><div id="tag5309" onclick="CopyToClipboard('tag5309');return false;" class="tag-decoration">testing-v2.18.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/720a6fb8ec1ceae25456019e413e32a6b099512c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/35271905958" target="_blank">2026-09-17 20:37:12</a></td></tr>
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
