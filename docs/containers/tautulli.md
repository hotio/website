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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2758" onclick="CopyToClipboard('tag2758');return false;" class="tag-decoration">release</div><div id="tag22562" onclick="CopyToClipboard('tag22562');return false;" class="tag-decoration">release-0673137</div><div id="tag22545" onclick="CopyToClipboard('tag22545');return false;" class="tag-decoration">release-2.17.2</div><div id="tag27193" onclick="CopyToClipboard('tag27193');return false;" class="tag-decoration">release-v2</div><div id="tag19598" onclick="CopyToClipboard('tag19598');return false;" class="tag-decoration">release-v2.17</div><div id="tag26143" onclick="CopyToClipboard('tag26143');return false;" class="tag-decoration">release-v2.17.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/06731379c368fb1e9c1ad524e4ba6aa4558847d8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/28395454741" target="_blank">2026-06-29 18:55:17</a></td></tr>
<tr><td><div id="tag10199" onclick="CopyToClipboard('tag10199');return false;" class="tag-decoration">testing</div><div id="tag20951" onclick="CopyToClipboard('tag20951');return false;" class="tag-decoration">testing-4262837</div><div id="tag20129" onclick="CopyToClipboard('tag20129');return false;" class="tag-decoration">testing-2.17.2</div><div id="tag24694" onclick="CopyToClipboard('tag24694');return false;" class="tag-decoration">testing-v2</div><div id="tag17812" onclick="CopyToClipboard('tag17812');return false;" class="tag-decoration">testing-v2.17</div><div id="tag21053" onclick="CopyToClipboard('tag21053');return false;" class="tag-decoration">testing-v2.17.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/4262837e56fc0384b2f3616228a607ee5de52544" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/28395454386" target="_blank">2026-06-29 18:55:17</a></td></tr>
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
