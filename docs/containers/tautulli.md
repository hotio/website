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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18761" onclick="CopyToClipboard('tag18761');return false;" class="tag-decoration">release</div><div id="tag3723" onclick="CopyToClipboard('tag3723');return false;" class="tag-decoration">release-6658e18</div><div id="tag4427" onclick="CopyToClipboard('tag4427');return false;" class="tag-decoration">release-2.18.2</div><div id="tag14977" onclick="CopyToClipboard('tag14977');return false;" class="tag-decoration">release-v2</div><div id="tag18329" onclick="CopyToClipboard('tag18329');return false;" class="tag-decoration">release-v2.18</div><div id="tag6970" onclick="CopyToClipboard('tag6970');return false;" class="tag-decoration">release-v2.18.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/6658e1836f04df174c972694f4efe4276a99b8fa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/42083345301" target="_blank">2026-11-05 18:20:48</a></td></tr>
<tr><td><div id="tag14913" onclick="CopyToClipboard('tag14913');return false;" class="tag-decoration">testing</div><div id="tag13166" onclick="CopyToClipboard('tag13166');return false;" class="tag-decoration">testing-85ee365</div><div id="tag21970" onclick="CopyToClipboard('tag21970');return false;" class="tag-decoration">testing-2.18.2</div><div id="tag26915" onclick="CopyToClipboard('tag26915');return false;" class="tag-decoration">testing-v2</div><div id="tag509" onclick="CopyToClipboard('tag509');return false;" class="tag-decoration">testing-v2.18</div><div id="tag7363" onclick="CopyToClipboard('tag7363');return false;" class="tag-decoration">testing-v2.18.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/85ee365ea1443807aff24516b939b8b5abd10488" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/42083354953" target="_blank">2026-11-05 18:20:53</a></td></tr>
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
