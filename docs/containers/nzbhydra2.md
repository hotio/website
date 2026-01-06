---
hide:
  - toc
title: hotio/nzbhydra2
---

--8<-- "includes/header-links.md"

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4536" onclick="CopyToClipboard('tag4536');return false;" class="tag-decoration">release</div><div id="tag29840" onclick="CopyToClipboard('tag29840');return false;" class="tag-decoration">release-8.2.0</div><div id="tag7570" onclick="CopyToClipboard('tag7570');return false;" class="tag-decoration">release-924b6fa</div><div id="tag18366" onclick="CopyToClipboard('tag18366');return false;" class="tag-decoration">release-v8</div><div id="tag15449" onclick="CopyToClipboard('tag15449');return false;" class="tag-decoration">release-v8.2</div><div id="tag8678" onclick="CopyToClipboard('tag8678');return false;" class="tag-decoration">release-v8.2.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/924b6fa7bd25d89c246b5c41ee801949c44e7cbd" target="_blank">Version update: 8.1.2 => 8.2.0</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/20712999011" target="_blank">2026-01-05 10:48:20</a></td></tr>
<tr><td><div id="tag3854" onclick="CopyToClipboard('tag3854');return false;" class="tag-decoration">testing</div><div id="tag18589" onclick="CopyToClipboard('tag18589');return false;" class="tag-decoration">testing-8.2.1</div><div id="tag6101" onclick="CopyToClipboard('tag6101');return false;" class="tag-decoration">testing-fd81e39</div><div id="tag15347" onclick="CopyToClipboard('tag15347');return false;" class="tag-decoration">testing-v8</div><div id="tag32043" onclick="CopyToClipboard('tag32043');return false;" class="tag-decoration">testing-v8.2</div><div id="tag3317" onclick="CopyToClipboard('tag3317');return false;" class="tag-decoration">testing-v8.2.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/fd81e399bb733f4ec6e0da4835b70912463dcc7d" target="_blank">Version update: 8.2.0 => 8.2.1</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/20760779282" target="_blank">2026-01-06 20:14:12</a></td></tr>
</tbody>
  </table>
</div>

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript" src="/javascripts/loadJSON-11.js"></script>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name nzbhydra2 \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"
