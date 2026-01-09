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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28647" onclick="CopyToClipboard('tag28647');return false;" class="tag-decoration">release</div><div id="tag6581" onclick="CopyToClipboard('tag6581');return false;" class="tag-decoration">release-2.16.0</div><div id="tag19484" onclick="CopyToClipboard('tag19484');return false;" class="tag-decoration">release-1ff6702</div><div id="tag10603" onclick="CopyToClipboard('tag10603');return false;" class="tag-decoration">release-v2</div><div id="tag25693" onclick="CopyToClipboard('tag25693');return false;" class="tag-decoration">release-v2.16</div><div id="tag12570" onclick="CopyToClipboard('tag12570');return false;" class="tag-decoration">release-v2.16.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/1ff670275c4c6dd50f0634b617d7cfed55415ad4" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/20842481379" target="_blank">2026-01-09 05:41:15</a></td></tr>
<tr><td><div id="tag25780" onclick="CopyToClipboard('tag25780');return false;" class="tag-decoration">testing</div><div id="tag9711" onclick="CopyToClipboard('tag9711');return false;" class="tag-decoration">testing-2.16.0</div><div id="tag2744" onclick="CopyToClipboard('tag2744');return false;" class="tag-decoration">testing-f221c2a</div><div id="tag3176" onclick="CopyToClipboard('tag3176');return false;" class="tag-decoration">testing-v2</div><div id="tag31433" onclick="CopyToClipboard('tag31433');return false;" class="tag-decoration">testing-v2.16</div><div id="tag17898" onclick="CopyToClipboard('tag17898');return false;" class="tag-decoration">testing-v2.16.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/f221c2a297fb177b38043875e5351ea0b0dbe50a" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/20842481516" target="_blank">2026-01-09 05:41:16</a></td></tr>
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
        -e WEBUI_PORTS="8181/tcp" \
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/tautulli
    ```

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
          - WEBUI_PORTS=8181/tcp
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"
